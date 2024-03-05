import { UserButton } from "@clerk/nextjs";

export default function TodosPage() {
  return (
    <div>
      <p>Welcome to the r2d2-2do</p>
      <div className="h-screen">
        <UserButton />
      </div>
    </div>
  );
}