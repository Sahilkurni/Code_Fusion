
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Ipform } from "."
const IpDialog = ({children}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {
                    children
                }
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center">Get word of Phrase.</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4 scale-110">
                    <Ipform/>
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default IpDialog;
