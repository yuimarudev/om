import { Message } from "discord.js";
import { SynthesisOption } from "node-altjtalk-binding";
import SeededRng from "./seeded-rng";

export function createSynthesisOption(message: Message): SynthesisOption {
  const rng = new SeededRng(message.author.id);

  return {
    additionalHalfTone: rng.range(-4, 3),
    speechSpeedRate: rng.range(1.2, 0.3, 3),
    weightOfGvForLogF0: Math.exp(rng.range(0, 1, 3)),
  };
}
