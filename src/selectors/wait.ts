import { selector } from "recoil";

export const waitText = selector<string>({
  key: 'waitText',
  get: async () => {
    await new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve("s");
      },1000)
    });
    return "complate";
  },
});
