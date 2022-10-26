import { selector } from "recoil";
import { TagType } from "types/TagType";

// ここはselectorのほうがよかった？
export const allJunleTag = selector<TagType[]>({
  key: "allJunleTag",
  get: async () => {
    // ここで値を取得する
    const temp = new Promise<void>((resolve) => {
      setTimeout(resolve, 5000);
    });
    const res = await temp.then(() => "hey");
    console.log("promise ", res);

    return [];
  },
});
