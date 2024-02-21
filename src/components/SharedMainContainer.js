import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";
import CardWrap from "./CardWrap";
import SharedTopContainer from "./SharedTopContainer";

const SharedMainContainer = () => {
  const [userData, setUserData] = useState({
    myName: null,
    myFolderName: null,
    myProfileImg: null,
    folders: [],
  });

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const getResult = await getFetchData(`/api/sample/folder`);
        setUserData({
          myName: getResult.folder.owner.name,
          myFolderName: getResult.folder.name,
          myProfileImg: getResult.folder.owner.profileImageSource,
          folders: getResult.folder.links,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchFolder();
  }, []);

  return (
    <>
      <SharedTopContainer {...userData} />
      <CardWrap folders={userData.folders} />
    </>
  );
};

export default SharedMainContainer;
