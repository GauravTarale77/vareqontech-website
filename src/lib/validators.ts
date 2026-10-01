// Tweak these two numbers if real names get wrongly rejected
const MIN_LENGTH_FOR_VOWEL_CHECK = 7;
const MIN_VOWEL_RATIO = 0.25;

const VOWELS = /[aeiouy]/g;
const KEYBOARD_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

function hasKeyboardMash(word: string, windowSize = 4): boolean {
  for (const row of KEYBOARD_ROWS) {
    const reversed = row.split("").reverse().join("");
    for (let i = 0; i <= word.length - windowSize; i++) {
      const chunk = word.slice(i, i + windowSize);
      if (row.includes(chunk) || reversed.includes(chunk)) return true;
    }
  }
  return false;
}

export function validateName(input: string): string | null {
  const name = input.trim().replace(/\s+/g, " ");
  const bad = "That doesn't look like a real name — please check it.";

  if (name.length < 3) return "Please enter your full name.";
  if (name.length > 60) return "That name looks too long — please shorten it.";
  if (!/^[\p{L}][\p{L}\p{M}\s.'-]*$/u.test(name)) {
    return "Names can only contain letters and spaces.";
  }

  for (const word of name.split(" ")) {
    const letters = word.replace(/[^\p{L}]/gu, "").toLowerCase();
    if (!letters) continue;
    if (/(.)\1\1/.test(letters)) return bad; // "aaab"

    // Extra checks only for Latin-script words (skips Hindi/Marathi etc.)
    if (!/^[a-z]+$/.test(letters) || letters.length < 3) continue;

    const vowelCount = (letters.match(VOWELS) || []).length;
    if (vowelCount === 0) return bad;
    if (
      letters.length >= MIN_LENGTH_FOR_VOWEL_CHECK &&
      vowelCount / letters.length <= MIN_VOWEL_RATIO
    ) {
      return bad;
    }
    if (/[^aeiouy]{5,}/.test(letters)) return bad;
    if (hasKeyboardMash(letters)) return bad;
  }
  return null;
}

export function validatePhone(raw: string): string | null {
  const cleaned = raw.replace(/[\s\-()]/g, "");
  const invalid =
    "Please enter a valid 10-digit mobile number, or include your country code (e.g. +1...).";
  let digits: string;

  if (cleaned.startsWith("+")) {
    digits = cleaned.slice(1);
    if (!/^\d{8,15}$/.test(digits)) return invalid;
    if (digits.startsWith("91") && !/^91[6-9]\d{9}$/.test(digits)) return invalid;
  } else {
    digits = cleaned.replace(/^0/, "").replace(/^91(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits)) return invalid;
  }

  const core = digits.slice(-10);
  const fake = /^(\d)\1{7,}$/.test(core);
  const sequence =
    "01234567890123456789".includes(core) || "98765432109876543210".includes(core);
  if (fake || sequence) return "That phone number doesn't look real — please check it.";

  return null;
}

const DISPOSABLE_DOMAINS = [
  "mailinator.com", "tempmail.com", "10minutemail.com",
  "guerrillamail.com", "yopmail.com", "trashmail.com",
  "sharklasers.com", "getnada.com",
];

export function validateEmail(input: string): string | null {
  const email = input.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return "Please enter a valid email address.";
  }
  if (DISPOSABLE_DOMAINS.includes(email.split("@")[1])) {
    return "Please use a permanent email address (temporary email services aren't accepted).";
  }
  return null;
}

export function validateMessage(input: string): string | null {
  const text = input.trim();
  if (text.length < 1) {
    return "Please tell us a bit more about your project (at least a short sentence).";
  }
  if (text.length > 2000) return "Message is too long — please keep it under 2000 characters.";
  return null;
}