import { ModeToggle } from "@/Components/mode-toggle";
import Main from "@/Layouts/Main";
import { User, Webs } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { Eye } from "lucide-react";

function rupiah(price: number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
}

export default function Home({ auth, webs }: { auth: { user: User }, webs:  Webs}) {
  return (
    <Main auth={auth}>
      <Head title="build with" />

      {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {
          // webs.map((web: Webs) => (
          //   <div key={web.id} rel="noreferrer">
          //       <div className="image">
          //           <img src={`/images/${web.image}`} alt="" className="[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] hover:scale-110 transition-all duration-300" />
          //       </div>
          //       <div className="title p-3">
          //           <div className="flex justify-between items-center">
          //         <Link href={'/webs/' + web.slug}>{web.title}</Link>
          //               <Link
          //                   href={web.url}
          //                   target="_blank"
          //                   rel="noreferrer"
          //                   className="inline-block h-full" aria-label="Preview" title="Preview" >
          //                   <Eye size={20} className="m-auto" />
          //               </Link>
          //           </div>
          //           <div className="">
          //               {/* <p className="text-sm text-zinc-600">{description}</p> */}
          //           </div>
          //       </div>
          //   </div>
          // ))
        }
      {/* </div> */}
    </Main>
  );
}
