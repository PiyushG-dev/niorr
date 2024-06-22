import Artists from "@/components/Artists";
import ContactInfo from "@/components/ContactInfo";
import Playlist from "@/components/Playlist";

export default function Home() {
  return (
    <main>
      <Playlist />
      <Artists />
      <ContactInfo />
    </main>
  );
}
