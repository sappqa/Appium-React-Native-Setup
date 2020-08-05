import { AppiumSetup } from "./appium.setup.js";
import { OS_CLI_ARG_NAME, IOS_PLATFORM_NAME } from "./appium.consts.js";

let client: any;
let isIOS: boolean;
let visible: string;
beforeAll(async () => {
  client = await AppiumSetup.setup();
  if (AppiumSetup.getCommandLineArgument(OS_CLI_ARG_NAME).toLowerCase() === IOS_PLATFORM_NAME.toLowerCase()) {
    isIOS = true;
    visible = "visible";
  } else {
    isIOS = false;
    visible = "displayed";
  }
});
  
beforeEach(async () => {
  await client.launchApp();
});

afterAll(async () => {
  await client.deleteSession();
});

test("First UI Test", async () => {
  const stepOne = isIOS ? await client.$("~Step One") : await client.$("//android.widget.TextView[1]");
  expect(await stepOne.getAttribute(visible)).toBeTruthy();
});