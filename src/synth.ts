import Component from "./component";

export default class Synth extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "Synth";
  }

  playMidiTune(tune: string): void {
    prompt(this.id, `Syn.PlayMidiTune(${tune}`);
  }

  playNote(note: number): void {
    prompt(this.id, `Syn.PlayNote(${note}`);
  }

  playTone(frequency: number, duration: number): void {
    prompt(this.id, `Syn.PlayTone(${frequency}\f${duration}`);
  }

  setDelay(ms: number): Synth {
    prompt(this.id, `Syn.SetDelay(${ms}`);
    return this;
  }

  setDelayEnabled(enable: boolean): Synth {
    prompt(this.id, `Syn.SetDelayEnabled(${enable}`);
    return this;
  }

  setFeedback(feedback: number): Synth {
    prompt(this.id, `Syn.SetFeedback(${feedback}`);
    return this;
  }

  setFrequency(frequency: number): Synth {
    prompt(this.id, `Syn.SetFrequency(${frequency}`);
    return this;
  }

  setNoteLength(duration: number): Synth {
    prompt(this.id, `Syn.SetNoteLength(${duration}`);
    return this;
  }

  setPhaser(
    drywet: number,
    rate: number,
    range: number,
    feedback: number
  ): Synth {
    prompt(this.id, `Syn.SetPhaser\f${drywet}\f${rate}\f${range}\f${feedback}`);
    return this;
  }

  setPhaserDryWet(drywet: number): Synth {
    prompt(this.id, `Syn.SetPhaserDryWet(${drywet}`);
    return this;
  }

  setPhaserEnabled(enable: boolean): Synth {
    prompt(this.id, `Syn.SetPhaserEnabled(${enable}`);
    return this;
  }

  setPhaserFeedback(feedback: number): Synth {
    prompt(this.id, `Syn.SetPhaserFeedback(${feedback}`);
    return this;
  }

  setPhaserRange(range: number): Synth {
    prompt(this.id, `Syn.SetPhaserRange(${range}`);
    return this;
  }

  setPhaserRate(rate: number): Synth {
    prompt(this.id, `Syn.SetPhaserRate(${rate}`);
    return this;
  }

  setVca(
    attack: number,
    decay: number,
    sustain: number,
    release: number
  ): Synth {
    prompt(this.id, `Syn.SetVca\f${attack}\f${decay}\f${sustain}\f${release}`);
    return this;
  }

  setVcaAttack(attack: number): Synth {
    prompt(this.id, `Syn.SetVcaAttack(${attack}`);
    return this;
  }

  setVcaDecay(decay: number): Synth {
    prompt(this.id, `Syn.SetVcaDecay(${decay}`);
    return this;
  }

  setVcaEnabled(enable: number): Synth {
    prompt(this.id, `Syn.SetVcaEnabled(${enable}`);
    return this;
  }

  setVcaRelease(release: number): Synth {
    prompt(this.id, `Syn.SetVcaRelease(${release}`);
    return this;
  }

  setVcaSustain(sustain: number): Synth {
    prompt(this.id, `Syn.SetVcaSustain(${sustain}`);
    return this;
  }

  setVcf(
    attack: number,
    decay: number,
    sustain: number,
    release: number,
    cuttoff: number,
    resonance: number,
    depth: number
  ): Synth {
    prompt(
      this.id,
      `Syn.SetVcf\f${attack}\f${decay}\f${sustain}\f${release}\f${cuttoff}\f${resonance}\f${depth}`
    );
    return this;
  }

  setVcfAttack(attack: number): Synth {
    prompt(this.id, `Syn.SetVcfAttack(${attack}`);
    return this;
  }

  setVcfCutoff(cuttoff: number): Synth {
    prompt(this.id, `Syn.SetVcfCutoff(${cuttoff}`);
    return this;
  }

  setVcfDecay(decay: number): Synth {
    prompt(this.id, `Syn.SetVcfDecay(${decay}`);
    return this;
  }

  setVcfDepth(depth: number): Synth {
    prompt(this.id, `Syn.SetVcfDepth(${depth}`);
    return this;
  }

  setVcfEnabled(enable: number): Synth {
    prompt(this.id, `Syn.SetVcfEnabled(${enable}`);
    return this;
  }

  setVcfRelease(release: number): Synth {
    prompt(this.id, `Syn.SetVcfRelease(${release}`);
    return this;
  }

  setVcfResonance(resonance: number): Synth {
    prompt(this.id, `Syn.SetVcfResonance(${resonance}`);
    return this;
  }

  setVcfSustain(sustain: number): Synth {
    prompt(this.id, `Syn.SetVcfSustain(${sustain}`);
    return this;
  }

  setVolume(left: number, right: number): Synth {
    prompt(this.id, `Syn.SetVolume(${left}\f${right}`);
    return this;
  }

  setWaveShape(shape: number): Synth {
    prompt(this.id, `Syn.SetWaveShape(${shape}`);
    return this;
  }

  start(): void {
    prompt(this.id, "Syn.Start(");
  }

  stop(): void {
    prompt(this.id, "Syn.Stop(");
  }
}
