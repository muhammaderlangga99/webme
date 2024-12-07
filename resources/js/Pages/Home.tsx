import { ModeToggle } from "@/Components/mode-toggle";
import Main from "@/Layouts/Main";
import { User } from "@/types";
import { Head } from "@inertiajs/react";

export default function Home({auth}: {auth: {user: User}}) {
  return (
    <Main auth={auth}>
      <Head title="Happy Book Event" />
    </Main>
  );
}
