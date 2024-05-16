import type { LinksData, User } from "@/src/types/type";

interface FolderProps {
  LinksData?: LinksData;
}

export default function Folder({ LinksData }: FolderProps) {
  console.log(LinksData);
  return (
    <>
      <div>폴더입니다</div>
    </>
  );
}
