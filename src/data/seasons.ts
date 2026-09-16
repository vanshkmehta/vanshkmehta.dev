export type SeasonStatus = "filming" | "queued";

export type Topic = {
  slug: string;
  title: string;
  episodeIds: string[];
  noteId: string | null;
  summary: string;
};

export type Season = {
  id: number;
  code: string;
  slug: string;
  title: string;
  status: SeasonStatus;
  pitch: string;
  topics: Topic[];
};

export const seasons: Season[] = [
  {
    id: 1,
    code: "S1",
    slug: "s1",
    title: "Memory & Low-Level",
    status: "filming",
    pitch:
      "Bits, bytes, layout, and the machines under your abstractions. If you cannot draw the memory, you do not own the program.",
    topics: [
      {
        slug: "bitwise",
        title: "Bitwise Manipulation",
        episodeIds: ["S1E1.1", "S1E1.2", "S1E1.3"],
        noteId: null,
        summary:
          "AND, OR, XOR, shifts, and masks. The algebra of flags, permissions, and compact state.",
      },
      {
        slug: "integers",
        title: "Integer Representation",
        episodeIds: ["S1E2.1", "S1E2.2", "S1E2.3"],
        noteId: null,
        summary:
          "Two’s complement, endianness, overflow, and why 0xFFFFFFFF is −1 on a 32-bit signed int.",
      },
      {
        slug: "layout",
        title: "Pointers, Arrays & Struct Layout",
        episodeIds: ["S1E3.1", "S1E3.2", "S1E3.3"],
        noteId: null,
        summary:
          "Addresses, padding, alignment, and the difference between a pointer and the thing it names.",
      },
      {
        slug: "cache",
        title: "Cache, Locality & Alignment",
        episodeIds: ["S1E4.1", "S1E4.2", "S1E4.3"],
        noteId: null,
        summary:
          "Cache lines, false sharing, and why row-major loops are not a style choice.",
      },
      {
        slug: "allocators",
        title: "Stack, Heap & Simple Allocators",
        episodeIds: ["S1E5.1", "S1E5.2", "S1E5.3"],
        noteId: null,
        summary:
          "Call stacks, malloc’s contract, and a bump/free-list allocator you can step through.",
      },
    ],
  },
  {
    id: 2,
    code: "S2",
    slug: "s2",
    title: "Data Structures I: Linear",
    status: "queued",
    pitch:
      "Arrays, strings, stacks, queues, and linked lists. The structures you will actually be asked to mutate on a whiteboard.",
    topics: [],
  },
  {
    id: 3,
    code: "S3",
    slug: "s3",
    title: "Data Structures II: Trees & Graphs",
    status: "queued",
    pitch:
      "BSTs, heaps, tries, union-find, and graph representations. Shape first, then the operations that preserve it.",
    topics: [],
  },
  {
    id: 4,
    code: "S4",
    slug: "s4",
    title: "Algorithms I: Search, Sort, Greedy",
    status: "queued",
    pitch:
      "Binary search as a loop invariant, sorting as a contract, greedy as a proof that a local choice is safe.",
    topics: [],
  },
  {
    id: 5,
    code: "S5",
    slug: "s5",
    title: "Algorithms II: DP & Graphs",
    status: "queued",
    pitch:
      "States, transitions, shortest paths, and the difference between memoization and a table you can explain.",
    topics: [],
  },
  {
    id: 6,
    code: "S6",
    slug: "s6",
    title: "Computer Architecture",
    status: "queued",
    pitch:
      "Pipelines, memory hierarchy, instruction sets, and what the CPU is doing while your code waits.",
    topics: [],
  },
  {
    id: 7,
    code: "S7",
    slug: "s7",
    title: "Languages, Parsing & Compilers",
    status: "queued",
    pitch:
      "Tokens, grammars, ASTs, and a tiny compiler you can run. Languages are programs that write programs.",
    topics: [],
  },
  {
    id: 8,
    code: "S8",
    slug: "s8",
    title: "Operating Systems",
    status: "queued",
    pitch:
      "Processes, virtual memory, scheduling, and syscalls. The kernel is not magic; it is a program with privileges.",
    topics: [],
  },
  {
    id: 9,
    code: "S9",
    slug: "s9",
    title: "Concurrency & Parallelism",
    status: "queued",
    pitch:
      "Locks, atomics, memory models, and the bugs that only exist when two things are true at once.",
    topics: [],
  },
  {
    id: 10,
    code: "S10",
    slug: "s10",
    title: "Computer Networks",
    status: "queued",
    pitch:
      "Packets, TCP congestion, HTTP, and the failure modes of a wire you do not control.",
    topics: [],
  },
  {
    id: 11,
    code: "S11",
    slug: "s11",
    title: "Databases",
    status: "queued",
    pitch:
      "Pages, indexes, WAL, isolation, and why B+ trees keep showing up in interviews and in production.",
    topics: [],
  },
  {
    id: 12,
    code: "S12",
    slug: "s12",
    title: "Distributed Systems",
    status: "queued",
    pitch:
      "Clocks, replication, consensus, and the sentences you should be able to say about partition tolerance.",
    topics: [],
  },
  {
    id: 13,
    code: "S13",
    slug: "s13",
    title: "API & Backend Systems",
    status: "queued",
    pitch:
      "Auth, idempotency, queues, and the shape of a service that can be operated at 3 a.m.",
    topics: [],
  },
  {
    id: 14,
    code: "S14",
    slug: "s14",
    title: "Security",
    status: "queued",
    pitch:
      "Threat models, crypto primitives used correctly, and the difference between a hash and a MAC.",
    topics: [],
  },
  {
    id: 15,
    code: "S15",
    slug: "s15",
    title: "Cloud, Infra & Reliability",
    status: "queued",
    pitch:
      "Deployments, SLOs, failover, and the operational work that keeps a system honest.",
    topics: [],
  },
  {
    id: 16,
    code: "S16",
    slug: "s16",
    title: "Machine Learning",
    status: "queued",
    pitch:
      "Linear models to training loops. Enough to read a paper and ship a small system. Not a hype reel.",
    topics: [],
  },
];

export function getSeason(id: number): Season | undefined {
  return seasons.find((s) => s.id === id);
}

export function filmingSeason(): Season {
  return seasons.find((s) => s.status === "filming") ?? seasons[0];
}
