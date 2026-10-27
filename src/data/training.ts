/**
 * Personal training offer copy for /training.
 */

export interface TrainingOffer {
  title: string;
  summary: string;
  forWhom: string;
  rates: string;
  privates: string;
  inquireSubject: string;
}

export const training: TrainingOffer = {
  title: "Personal training",
  summary:
    "One-to-one strength and conditioning with a certified personal trainer. Sessions are training, not a makeover pitch.",
  forWhom:
    "Adults who want a clear plan, honest feedback, and work that fits a real week. No experience required to inquire.",
  rates: "Rates: inquire.",
  privates:
    "Yoga privates are available under the same inquire path when a mat practice is the better fit.",
  inquireSubject: "Métier training inquire",
};
