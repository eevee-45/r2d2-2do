CREATE TABLE public."User" (
  id SERIAL PRIMARY KEY,
  feed_id INTEGER
  CONSTRAINT user_feed_fk FOREIGN KEY (feed_id) REFERENCES public."Feed" (id)
);

-- Feed table
CREATE TABLE public."Feed" (
    "id" serial NOT NULL,
    "userId" integer NOT NULL UNIQUE
    CONSTRAINT "feed_pk" PRIMARY KEY ("id"),
    CONSTRAINT "feed_user_fk" FOREIGN KEY ("userId") REFERENCES public."User" ("id")
);

-- Checklist table
CREATE TABLE public."Checklist" (
    "id" serial NOT NULL,
    "name" varchar NOT NULL,
    "feedId" integer NOT NULL
    CONSTRAINT "checklist_pk" PRIMARY KEY ("id"),
    CONSTRAINT "checklist_feed_fk" FOREIGN KEY ("feedId") REFERENCES public."Feed" ("id")
);

-- Tasks table
CREATE TABLE public."Tasks" (
    "id" serial NOT NULL,
    "content" varchar NOT NULL,
    "done" boolean NOT NULL DEFAULT FALSE,
    "checklistId" integer NOT NULL
    -- CONSTRAINT "tasks_pk" PRIMARY KEY ("id"),
    -- CONSTRAINT "tasks_checklist_fk" FOREIGN KEY ("checklistId") REFERENCES public."Checklist" ("id")
);