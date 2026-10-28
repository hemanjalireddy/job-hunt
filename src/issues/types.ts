// One file per week in this folder (except this one) becomes a journal entry.

export type Contribution = {
  // The job description's own words
  jd: string;
  // What I've done that matches it
  mine: string;
};

export type Role = {
  company: string;
  title: string;
  // Requisition / role ID, when the posting has one
  req?: string;
  url?: string;
  // How I could contribute, tied to the job description
  contribute?: Contribution[];
};

export type Entry = {
  no: number;
  // Monday of the week, ISO date
  weekOf: string;
  title: string;
  // Optional one-line note on the week's focus
  note?: string;
  roles: Role[];
};
