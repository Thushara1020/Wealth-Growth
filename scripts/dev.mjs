import { spawn } from "node:child_process";

const children = [
  spawn("npm", ["--prefix", "web", "run", "dev"], { stdio: "inherit" }),
  spawn("npm", ["--prefix", "server", "run", "dev"], { stdio: "inherit" }),
];

let stopping = false;

function stop(exitCode = 0) {
  if (stopping) return;
  stopping = true;

  for (const child of children) {
    if (!child.killed) child.kill("SIGTERM");
  }

  process.exitCode = exitCode;
}

for (const child of children) {
  child.on("error", (error) => {
    console.error(error);
    stop(1);
  });

  child.on("exit", (code, signal) => {
    if (!stopping && code !== 0 && signal !== "SIGTERM") stop(code ?? 1);
  });
}

process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
