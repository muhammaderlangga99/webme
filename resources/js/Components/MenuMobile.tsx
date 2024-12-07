import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer"
import { Button } from "./ui/button"
import { Equal } from "lucide-react"
import { Link } from "@inertiajs/react"


export default function MenuMobile({ Navigation }: { Navigation: any }) {
    const pathName = window.location.pathname;
    return (
        <Drawer>
            <DrawerTrigger>
                <Equal strokeWidth={1} className='lg:hidden' />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription>
                    {Navigation.map((item: any, index:any) => (
                        <div key={index} className="flex flex-col space-y-3 items-start">
                            <Link href={item.link} className={`hover:text-zinc-600 mb-3 px-3 ${item.link == pathName && 'text-green-950 dark:text-green-900 dark:hover:text-green-900 font-extrabold hover:text-green-950'}`}>{item.name}</Link>
                        </div>
                    ))}
                </DrawerDescription>
            </DrawerContent>
        </Drawer>
    );
}
