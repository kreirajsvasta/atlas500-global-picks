import handler from "vinext/server/app-router-entry";

interface WorkerEnvironment {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

interface WorkerExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

export default {
  fetch(request: Request, env: WorkerEnvironment, context: WorkerExecutionContext) {
    return handler.fetch(request, env, context);
  },
};
