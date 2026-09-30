export type SeasonStatus = "filming" | "queued";

export type QueuedEpisode = {
  id: string;
};

export type LiveEpisode = {
  id: string;
  youtubeId: string;
  title: string;
  subtitle?: string;
  blurb: string;
  featured?: boolean;
};

export type Episode = QueuedEpisode | LiveEpisode;

export type Topic = {
  slug: string;
  title: string;
  episodes: Episode[];
  noteId: string | null;
  summary: string;
};

export type FeaturedClass = {
  season: Season;
  topic: Topic;
  episode: LiveEpisode;
};

export function isLiveEpisode(episode: Episode): episode is LiveEpisode {
  return "youtubeId" in episode && Boolean(episode.youtubeId);
}

export function youtubeWatchUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function youtubeThumbUrl(youtubeId: string): string {
  return `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
}

function queued(...ids: string[]): QueuedEpisode[] {
  return ids.map((id) => ({ id }));
}

const plain = ["1", "2", "3"];

function ep(season: number, topicIndex: number, beats: string[]): QueuedEpisode[] {
  return queued(...beats.map((beat) => `S${season}E${topicIndex}.${beat}`));
}

function topic(slug: string, title: string, summary: string, episodes: Episode[]): Topic {
  return { slug, title, summary, episodes, noteId: null };
}

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
    title: "Memory & Low-Level Programming",
    status: "filming",
    pitch:
      "Bits, addresses, and the call stack versus the heap. Draw the memory, and you own the program. Struct layout returns beside the caches in S12, and file I/O opens the file system arc in S9.",
    topics: [
      topic(
        "bitwise",
        "Bitwise Manipulation & Binary Arithmetic",
        "How integers live in silicon, and how masks and flags turn a single word into a compact control plane.",
        [
          {
            id: "S1E1.1",
            youtubeId: "bY6eUL4CgCw",
            title: "Bitwise Manipulation Explained",
            subtitle: "Two's Complement, Masks & Flags",
            blurb:
              "What binary actually is. How two's complement stores a negative. How a mask checks, sets, or clears a flag.",
            featured: true,
          },
          { id: "S1E1.2" },
          { id: "S1E1.3" },
        ],
      ),
      topic(
        "pointers",
        "Pointers & Direct Memory Addressing",
        "RAM as a byte-indexed array: addresses, dereferencing, and the bugs that follow when you get them wrong.",
        ep(1, 2, plain),
      ),
      topic(
        "stack-heap",
        "Stack vs Heap & Dynamic Memory Allocation",
        "Call frames versus malloc. Fragmentation, heap metadata, and what a free-list allocator actually does.",
        ep(1, 3, ["1", "2", "3.1", "3.2"]),
      ),
    ],
  },
  {
    id: 2,
    code: "S2",
    slug: "s2",
    title: "Linear Data Structures & Searching",
    status: "queued",
    pitch:
      "Arrays, binary search, strings, pattern matching, lists, stacks, and queues. The daily structures, and the searches that get answers out of them.",
    topics: [
      topic(
        "arrays",
        "Static & Dynamic Arrays",
        "Fixed layouts, amortized append, and growth factors. The array as both a structure and a performance lever.",
        ep(2, 1, plain),
      ),
      topic(
        "binary-search",
        "Binary Search & Search-on-Answer",
        "Halving a sorted space, the loop invariants that kill off-by-one bugs, and searching over the answer instead of the array.",
        ep(2, 2, plain),
      ),
      topic(
        "strings-windows",
        "Strings & Sliding Windows",
        "String representations, and the sliding-window pattern for substrings and rate limits.",
        ep(2, 3, plain),
      ),
      topic(
        "pattern-matching",
        "String Pattern Matching (KMP, Rabin-Karp & Regex Basics)",
        "Finding a pattern inside text without re-scanning: the KMP failure function, Rabin-Karp rolling hashes, and what a regex engine actually does.",
        ep(2, 4, plain),
      ),
      topic(
        "linked-lists",
        "Linked Lists (Singly, Doubly, Circular)",
        "Node-based lists, pointer surgery, and why locality still matters when the nodes are scattered.",
        ep(2, 5, plain),
      ),
      topic(
        "stacks",
        "Stacks & Monotonic Stacks",
        "LIFO discipline, call-stack intuition, and monotonic stacks for next-greater problems.",
        ep(2, 6, plain),
      ),
      topic(
        "queues",
        "Queues & Priority Queues",
        "FIFO queues, deques, and the producer-consumer pattern behind background workers.",
        ep(2, 7, plain),
      ),
    ],
  },
  {
    id: 3,
    code: "S3",
    slug: "s3",
    title: "Hashing, Trees, Tries & Heaps",
    status: "queued",
    pitch:
      "Hash tables, trees, balanced BSTs, tries, and heaps. Turn a linear scan into a lookup you can explain.",
    topics: [
      topic(
        "hash-tables",
        "Hash Tables & Collision Resolution",
        "Hash functions, load factors, and chaining versus open addressing, then a real in-memory key-value store.",
        ep(3, 1, ["1", "2", "3.1", "3.2"]),
      ),
      topic(
        "binary-trees",
        "Binary Trees & Traversals",
        "Tree anatomy and the four core traversals. The grammar of hierarchical data.",
        ep(3, 2, plain),
      ),
      topic(
        "bsts",
        "BSTs & Self-Balancing Trees (AVL/Red-Black)",
        "BST invariants, skew, rotations, and ordered indexes for range queries.",
        ep(3, 3, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "tries",
        "Tries (Prefix Trees)",
        "Prefix trees that share common prefixes, so lookup cost depends on key length instead of dictionary size.",
        ep(3, 4, plain),
      ),
      topic(
        "heaps",
        "Heaps (Min/Max)",
        "Array-mapped complete trees, heapify, and priority dispatch for jobs and top-K.",
        ep(3, 5, plain),
      ),
    ],
  },
  {
    id: 4,
    code: "S4",
    slug: "s4",
    title: "Algorithmic Paradigms",
    status: "queued",
    pitch:
      "Divide and conquer, greedy, backtracking, and dynamic programming. Four patterns, in that order, because each one sets up the next.",
    topics: [
      topic(
        "divide-conquer",
        "Divide & Conquer",
        "Recurrences, the Master Theorem, and partition versus merge. From sorting theory to files bigger than RAM.",
        ep(4, 1, ["1.1", "1.2", "2", "3.1", "3.2"]),
      ),
      topic(
        "greedy",
        "Greedy Algorithms",
        "Take the locally best choice and prove it never hurts. Exchange arguments, interval scheduling, and the cases where greedy fails.",
        ep(4, 2, plain),
      ),
      topic(
        "backtracking",
        "Backtracking",
        "Explore a decision tree, prune dead branches early, and undo a choice cleanly.",
        ep(4, 3, plain),
      ),
      topic(
        "dynamic-programming",
        "Dynamic Programming (1D & 2D)",
        "Optimal substructure and overlapping subproblems. One-dimensional tables, then two, then an LCS diff.",
        ep(4, 4, ["1.1", "1.2", "2", "3"]),
      ),
    ],
  },
  {
    id: 5,
    code: "S5",
    slug: "s5",
    title: "Graph Algorithms",
    status: "queued",
    pitch:
      "Traversals, topological order, shortest paths, and spanning trees. Networks, dependencies, and maps, drawn as graphs.",
    topics: [
      topic(
        "traversals",
        "Graph Representations & Traversals (BFS/DFS)",
        "Adjacency structures, cycle detection, components, and BFS and DFS as the everyday graph tools.",
        ep(5, 1, plain),
      ),
      topic(
        "topological-sort",
        "Topological Sorting & DAGs",
        "DAGs, Kahn's algorithm, and DFS ordering. The order behind build systems and course prerequisites.",
        ep(5, 2, plain),
      ),
      topic(
        "shortest-path",
        "Shortest Path (Dijkstra & Bellman-Ford)",
        "Edge relaxation, Dijkstra, and Bellman-Ford when edges can be negative.",
        ep(5, 3, plain),
      ),
      topic(
        "mst",
        "MSTs (Kruskal/Prim) & Disjoint Sets",
        "The cut property, Union-Find, and greedy spanning trees for the cheapest connected network.",
        ep(5, 4, plain),
      ),
    ],
  },
  {
    id: 6,
    code: "S6",
    slug: "s6",
    title: "OOP & Software Design",
    status: "queued",
    pitch:
      "The four OOP pillars in Java, then SOLID, then the patterns that keep a design changeable.",
    topics: [
      topic(
        "oop-pillars",
        "OOP Pillars in Java",
        "Encapsulation, abstraction, inheritance, and polymorphism in plain Java, plus overloading versus overriding and how the JVM picks a method.",
        ep(6, 1, plain),
      ),
      topic(
        "solid",
        "SOLID Principles",
        "SRP through DIP. Turning a smell into a design you can plug something into.",
        ep(6, 2, plain),
      ),
      topic(
        "design-patterns",
        "Creational & Structural Design Patterns",
        "Singleton, Factory, Builder, Adapter, and Decorator, and a middleware pipeline that uses them.",
        ep(6, 3, plain),
      ),
    ],
  },
  {
    id: 7,
    code: "S7",
    slug: "s7",
    title: "Database Systems",
    status: "queued",
    pitch:
      "Relational algebra, normalization, B+ trees, transactions, and crash recovery. A small database, one layer at a time.",
    topics: [
      topic(
        "relational-algebra",
        "Relational Algebra & Advanced SQL",
        "Select, project, join, and SQL execution order, then an in-memory query engine over JSON.",
        ep(7, 1, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "normalization",
        "Database Normalization (1NF–BCNF)",
        "Functional dependencies and normal forms. Anomalies removed by decomposition.",
        ep(7, 2, plain),
      ),
      topic(
        "bplus-trees",
        "Database Storage & B+ Tree Indexing",
        "Slotted pages and B+ trees, from insert and split to pages on disk.",
        ep(7, 3, ["1.1", "1.2", "2", "3.1", "3.2"]),
      ),
      topic(
        "transactions",
        "Transactions, ACID & Concurrency Control",
        "Isolation anomalies, two-phase locking, and MVCC so readers do not block writers.",
        ep(7, 4, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "wal",
        "WAL & Crash Recovery",
        "Buffer pool versus disk, redo and undo, checkpoints, and recovery from a log.",
        ep(7, 5, plain),
      ),
    ],
  },
  {
    id: 8,
    code: "S8",
    slug: "s8",
    title: "Computer Networks",
    status: "queued",
    pitch:
      "Ethernet, IP, routing, TCP, UDP, DNS, HTTP, and WebSockets. Packets from the wire to the browser.",
    topics: [
      topic(
        "link-layer",
        "Physical & Data Link (Ethernet, MAC, ARP)",
        "Framing, MAC learning, and ARP. How a frame finds the next hop on a LAN.",
        ep(8, 1, plain),
      ),
      topic(
        "ip-subnetting",
        "Network Layer: IP & Subnetting",
        "IPv4 headers, CIDR, NAT, and a table that picks the next hop.",
        ep(8, 2, plain),
      ),
      topic(
        "routing",
        "Routing Protocols (DV & Link State)",
        "RIP, OSPF, and BGP. Distance-vector convergence, and shortest paths from link state.",
        ep(8, 3, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "tcp-handshake",
        "TCP Handshake & Connection State",
        "The three-way handshake, teardown, sequence numbers, and TIME_WAIT, read off a packet dump.",
        ep(8, 4, plain),
      ),
      topic(
        "tcp-congestion",
        "TCP Flow & Congestion Control",
        "Sliding windows, slow start, and AIMD, simulated on a lossy channel.",
        ep(8, 5, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "udp",
        "UDP vs TCP & Raw Sockets",
        "What you give up with UDP, and a high-throughput metric collector in that style.",
        ep(8, 6, plain),
      ),
      topic(
        "dns",
        "DNS",
        "The hierarchy, recursion, and record types, then an authoritative resolver on UDP port 53.",
        ep(8, 7, ["1", "2", "3.1", "3.2"]),
      ),
      topic(
        "http",
        "HTTP/1.1, HTTP/2, HTTP/3",
        "Headers, head-of-line blocking, HTTP/2 framing, and QUIC, then a bare-metal HTTP/1.1 server.",
        ep(8, 8, ["1.1", "1.2", "2", "3.1", "3.2"]),
      ),
      topic(
        "websockets",
        "WebSockets & Persistent Streaming",
        "The upgrade handshake and full-duplex frames, then a multi-room chat broker.",
        ep(8, 9, plain),
      ),
    ],
  },
  {
    id: 9,
    code: "S9",
    slug: "s9",
    title: "Operating Systems",
    status: "queued",
    pitch:
      "Processes, scheduling, threads, deadlocks, and virtual memory. File I/O and byte streams sit right before file systems and inodes.",
    topics: [
      topic(
        "processes",
        "Processes & System Calls",
        "Process control blocks, state changes, and fork, exec, and wait. How user code becomes a process.",
        ep(9, 1, plain),
      ),
      topic(
        "scheduling",
        "CPU Scheduling Algorithms",
        "Turnaround and wait time under FCFS, SJF, round robin, and MLFQ, then a cooperative event loop.",
        ep(9, 2, plain),
      ),
      topic(
        "threads",
        "Threads, Race Conditions & Mutexes",
        "Shared address spaces, races, atomics, and mutexes. Concurrency bugs you can reproduce.",
        ep(9, 3, plain),
      ),
      topic(
        "deadlocks",
        "Deadlocks & Concurrency Hazards",
        "Coffman conditions, resource-allocation graphs, and the Banker's Algorithm. Find a circular wait and stop it.",
        ep(9, 4, plain),
      ),
      topic(
        "virtual-memory",
        "Virtual Memory & Paging",
        "Virtual versus physical addresses, page tables, TLBs, and multi-level paging, simulated in software.",
        ep(9, 5, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "page-replacement",
        "Page Replacement Algorithms",
        "Thrashing, and FIFO, OPT, LRU, and Clock when the frame count is finite.",
        ep(9, 6, plain),
      ),
      topic(
        "file-io",
        "File I/O & Byte Streams",
        "File descriptors, buffering, and seek pointers. Move bytes without loading the whole file into RAM.",
        ep(9, 7, plain),
      ),
      topic(
        "file-systems",
        "File Systems & Inodes",
        "Superblocks, inodes, and indirect blocks, then an in-memory file system with directories.",
        ep(9, 8, ["1.1", "1.2", "2", "3.1", "3.2"]),
      ),
    ],
  },
  {
    id: 10,
    code: "S10",
    slug: "s10",
    title: "Cybersecurity & Cryptography",
    status: "queued",
    pitch:
      "Encryption, password hashing, TLS, and the web bugs you should be able to name and fix.",
    topics: [
      topic(
        "encryption",
        "Symmetric & Asymmetric Encryption",
        "AES, initialization vectors, RSA, and Diffie-Hellman, then file encryption from a passphrase.",
        ep(10, 1, plain),
      ),
      topic(
        "password-hashing",
        "Cryptographic Hashing & Password Storage",
        "One-way hashes, salts, and slow key derivation. Argon2id in a real auth service.",
        ep(10, 2, plain),
      ),
      topic(
        "tls",
        "TLS/SSL & PKI",
        "Certificate authorities, X.509, and the TLS 1.3 handshake, plus a validator for a chain you signed yourself.",
        ep(10, 3, plain),
      ),
      topic(
        "web-security",
        "Web Security (XSS, CSRF, SQLi)",
        "The usual web bugs, reproduced in a sandbox, then fixed with parameterized queries, CSP, and SameSite.",
        ep(10, 4, ["1", "2", "3.1", "3.2"]),
      ),
    ],
  },
  {
    id: 11,
    code: "S11",
    slug: "s11",
    title: "Distributed Systems",
    status: "queued",
    pitch:
      "Load balancing, consistent hashing, replication, and event-driven messaging. What changes when the system is more than one machine.",
    topics: [
      topic(
        "load-balancing",
        "Reverse Proxies & Load Balancing",
        "Forward versus reverse proxies, and a multi-backend proxy with health checks.",
        ep(11, 1, ["1", "2", "3.1", "3.2"]),
      ),
      topic(
        "consistent-hashing",
        "Distributed Caching & Consistent Hashing",
        "Cache-aside, and hash rings with virtual nodes so a membership change remaps as little as possible.",
        ep(11, 2, plain),
      ),
      topic(
        "cap",
        "CAP Theorem & Data Replication",
        "CAP, PACELC, replication topologies, and quorum reads and writes on a three-node store.",
        ep(11, 3, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "messaging",
        "Async Messaging & Event-Driven Architecture",
        "Queues versus pub/sub, offsets, and consumer groups, then a notification hub with several workers.",
        ep(11, 4, plain),
      ),
    ],
  },
  {
    id: 12,
    code: "S12",
    slug: "s12",
    title: "Computer Organization & Architecture",
    status: "queued",
    pitch:
      "Gates, pipelines, and the memory hierarchy. Struct padding and alignment sit right before CPU caches.",
    topics: [
      topic(
        "digital-logic",
        "Digital Logic & ALU Architecture",
        "Gates, adders, and muxes. The path from a transistor to an arithmetic logic unit.",
        ep(12, 1, plain),
      ),
      topic(
        "pipelining",
        "CPU Pipelining & Branch Prediction",
        "A five-stage RISC pipeline, hazards, and why a branch costs cycles.",
        ep(12, 2, ["1.1", "1.2", "2", "3"]),
      ),
      topic(
        "struct-padding",
        "Structs, Padding & Memory Alignment",
        "Why a struct that looks like 5 bytes occupies 8. Alignment, padding, and a layout the cache can use.",
        ep(12, 3, plain),
      ),
      topic(
        "caches",
        "Memory Hierarchy & CPU Caches",
        "Locality, cache lines, and mapping policies, plus a benchmark that shows layout in the runtime.",
        ep(12, 4, plain),
      ),
    ],
  },
  {
    id: 13,
    code: "S13",
    slug: "s13",
    title: "Discrete Mathematics",
    status: "queued",
    pitch:
      "Logic, sets, and counting. The quiet math under compilers, databases, and security estimates.",
    topics: [
      topic(
        "logic",
        "Propositional Logic & Boolean Algebra",
        "Truth tables, equivalences, and Karnaugh maps. The algebra behind a condition and a hardware gate.",
        ep(13, 1, plain),
      ),
      topic(
        "sets",
        "Set Theory & Relations",
        "Cartesian products, equivalence relations, and partial orders. The language of dependencies and partitions.",
        ep(13, 2, plain),
      ),
      topic(
        "combinatorics",
        "Combinatorics & Discrete Probability",
        "Counting arguments and probability bounds that show up in hashing, passwords, and interview puzzles.",
        ep(13, 3, plain),
      ),
    ],
  },
  {
    id: 14,
    code: "S14",
    slug: "s14",
    title: "Theory of Computation",
    status: "queued",
    pitch:
      "Finite automata, regular languages, and Turing machines. What a machine can recognize, and what it cannot.",
    topics: [
      topic(
        "automata",
        "Finite Automata (DFA & NFA)",
        "States, alphabets, and subset construction. An automaton as a spec you can run.",
        ep(14, 1, plain),
      ),
      topic(
        "regex-grammars",
        "Regular Expressions & Grammars",
        "Regular expressions and finite automata, Kleene's theorem, and the Chomsky hierarchy, then a tokenizer.",
        ep(14, 2, plain),
      ),
      topic(
        "turing-machines",
        "Turing Machines & Computability",
        "An infinite tape, decidability, and the Halting Problem, plus a machine that increments a binary number.",
        ep(14, 3, plain),
      ),
    ],
  },
  {
    id: 15,
    code: "S15",
    slug: "s15",
    title: "Compiler Design",
    status: "queued",
    pitch:
      "Lexing, parsing, intermediate code, and a stack machine. From characters to bytecode you can step through.",
    topics: [
      topic(
        "lexing-asts",
        "Lexical Analysis & ASTs",
        "Tokens to trees. Context-free grammars, precedence, and a recursive-descent parser for arithmetic.",
        ep(15, 1, plain),
      ),
      topic(
        "ir-bytecode",
        "IR & Bytecode Execution",
        "Three-address code, stack machines versus register machines, and an interpreter that can jump.",
        ep(15, 2, ["1.1", "1.2", "2", "3.1", "3.2"]),
      ),
    ],
  },
  {
    id: 16,
    code: "S16",
    slug: "s16",
    title: "Machine Learning Fundamentals",
    status: "queued",
    pitch:
      "Linear regression and gradient descent, then neural nets and backprop. Written out, not hidden in a library.",
    topics: [
      topic(
        "linear-regression",
        "Linear Regression & Gradient Descent",
        "A hypothesis, mean squared error, and the update rule, then a predictor for API usage with no ML library.",
        ep(16, 1, plain),
      ),
      topic(
        "neural-nets",
        "Neural Nets & Backpropagation",
        "Neurons, activations, the forward pass, and backpropagation, then a digit classifier with an HTTP inference API.",
        ep(16, 2, ["1.1", "1.2", "2", "3.1", "3.2"]),
      ),
    ],
  },
];

const expectedSize: Record<number, { topics: number; episodes: number }> = {
  1: { topics: 3, episodes: 10 },
  2: { topics: 7, episodes: 21 },
  3: { topics: 5, episodes: 17 },
  4: { topics: 4, episodes: 15 },
  5: { topics: 4, episodes: 12 },
  6: { topics: 3, episodes: 9 },
  7: { topics: 5, episodes: 19 },
  8: { topics: 9, episodes: 32 },
  9: { topics: 8, episodes: 27 },
  10: { topics: 4, episodes: 13 },
  11: { topics: 4, episodes: 14 },
  12: { topics: 4, episodes: 13 },
  13: { topics: 3, episodes: 9 },
  14: { topics: 3, episodes: 9 },
  15: { topics: 2, episodes: 8 },
  16: { topics: 2, episodes: 8 },
};

export function countEpisodes(season: Season): number {
  return season.topics.reduce((sum, item) => sum + item.episodes.length, 0);
}

export function curriculumTotals(): { seasons: number; topics: number; episodes: number } {
  return {
    seasons: seasons.length,
    topics: seasons.reduce((sum, season) => sum + season.topics.length, 0),
    episodes: seasons.reduce((sum, season) => sum + countEpisodes(season), 0),
  };
}

for (const season of seasons) {
  const expected = expectedSize[season.id];
  const topics = season.topics.length;
  const episodes = countEpisodes(season);
  if (!expected || topics !== expected.topics || episodes !== expected.episodes) {
    throw new Error(
      `${season.code} expected ${expected?.topics ?? "?"} topics / ${expected?.episodes ?? "?"} episodes, got ${topics} / ${episodes}`,
    );
  }
}

const totals = curriculumTotals();
if (totals.seasons !== 16 || totals.topics !== 70 || totals.episodes !== 236) {
  throw new Error(
    `Curriculum totals ${totals.seasons} seasons, ${totals.topics} topics, ${totals.episodes} episodes`,
  );
}

export function getSeason(id: number): Season | undefined {
  return seasons.find((s) => s.id === id);
}

export function filmingSeason(): Season {
  return seasons.find((s) => s.status === "filming") ?? seasons[0];
}

export function liveEpisodes(item: Topic): LiveEpisode[] {
  return item.episodes.filter(isLiveEpisode);
}

export function queuedEpisodeIds(item: Topic): string[] {
  return item.episodes.filter((episode) => !isLiveEpisode(episode)).map((episode) => episode.id);
}

export function featuredClass(): FeaturedClass | undefined {
  let featured: FeaturedClass | undefined;
  let fallback: FeaturedClass | undefined;

  for (const season of seasons) {
    for (const item of season.topics) {
      for (const episode of liveEpisodes(item)) {
        const current = { season, topic: item, episode };
        fallback = current;
        if (episode.featured) featured = current;
      }
    }
  }

  return featured ?? fallback;
}
