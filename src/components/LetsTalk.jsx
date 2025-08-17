import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { SiGmail, SiYahoo } from "react-icons/si";
import { Mail } from "lucide-react";

export default function LetsTalk() {
  const [open, setOpen] = useState(false);

  const handleOpenLink = (url) => {
    window.open(url, "_blank");
    setOpen(false);
  };

  const handleMailto = () => {
    window.location.href = "mailto:floreaivan2003@yahoo.ro";
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="mt-4 w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
      >
        Let’s Talk
        <ArrowRight className="h-4 w-4" />
      </Button>

<Dialog open={open} onOpenChange={setOpen}>
  <div className="fixed inset-0 bg-blue-500/80 backdrop-blur-sm z-40"></div> {/* overlay albastru */}
  <DialogContent className="rounded-2xl p-6 max-w-sm z-50 text-white bg-blue-600">
    <DialogHeader>
      <DialogTitle className="text-lg font-semibold text-center">
        Alege cum vrei să trimiți emailul
      </DialogTitle>
    </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button
              className="bg-red-600 hover:bg-red-500 text-white w-full flex items-center gap-2 rounded-xl py-2"
              onClick={() =>
                handleOpenLink(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=floreaivan2003@yahoo.ro"
                )
              }
            >
              <SiGmail className="h-5 w-5" />
              Gmail
            </Button>

            <Button
              className="bg-purple-700 hover:bg-purple-600 text-white w-full flex items-center gap-2 rounded-xl py-2"
              onClick={() =>
                handleOpenLink(
                  "https://compose.mail.yahoo.com/?to=floreaivan2003@yahoo.ro"
                )
              }
            >
              <SiYahoo className="h-5 w-5" />
              Yahoo Mail
            </Button>

            <Button
              className="bg-gray-700 hover:bg-gray-600 text-white w-full flex items-center gap-2 rounded-xl py-2"
              onClick={handleMailto}
            >
              <Mail className="h-5 w-5" />
              Default Mail App
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
