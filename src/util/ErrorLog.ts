import * as FileSystem from "expo-file-system";
import { ToastAndroid, Platform } from "react-native";
// import email from "react-native-email";
// import I18n from "../i18n/i18n";

const errorLogPath =
    FileSystem.documentDirectory + "/bloompub-viewer-errors.log";
const issuesEmailAddress = "issues@bloomlibrary.org";

interface Options {
    logMessage: string;
    toastMessage?: string;
}

export function logError(options: Options): void {
    writeToErrorLog(options.logMessage);
    if (options.toastMessage) {
        ToastAndroid.show(options.toastMessage, ToastAndroid.SHORT);
    }
    if (!options.toastMessage) {
        // Creates a "Yellow Box" message in development
        console.warn(options.logMessage);
    }
}

// export function logNewAppVersion(appVersion: string): void {
//   const message =
//     `  BloomReader version: ${appVersion}\n` +
//     `  Device OS: ${Platform.OS}\n` +
//     `  OS Version: ${Platform.Version}`;

//   writeToErrorLog(message);
// }

// export async function emailLog(): Promise<void> {
//   const errorLog = await getErrorLog();
//   try {
//     email(issuesEmailAddress, {
//       subject: "Bloom Reader Error Log",
//       body: errorLog
//     });
//   } catch (err) {
//     logError({
//       logMessage: `Error emailing error log:\n${JSON.stringify(err)}`,
//       toastMessage: I18n.t("Could not email error log.")
//     });
//   }
// }

// async function getErrorLog(): Promise<string> {
//   const logExists = await RNFS.exists(errorLogPath);
//   if (!logExists) return "[Empty error log]"; // This is unlikely since we log version info when the app first runs
//   return RNFS.readFile(errorLogPath);
// }

async function writeToErrorLog(message: string): Promise<void> {
    // TODO: We'd really like to append to the file instead, but it doesn't seem like that's supported in the FileSystem class.
    // Need an alternative way. For now, we just overwrite it all the time.
    FileSystem.writeAsStringAsync(errorLogPath, wrapMessage(message));

    // BloomReader-RN
    //   const logExists = await RNFS.exists(errorLogPath);
    //   if (logExists) {
    //     // appendFile() is missing from type definitions but it exists
    //     // PR: https://github.com/itinance/react-native-fs/pull/651
    //     await RNFS.appendFile(errorLogPath, wrapMessage(message));
    //   } else {
    //     await RNFS.writeFile(errorLogPath, wrapMessage(message));
    //   }
}

function wrapMessage(message: string): string {
    return `== ${new Date().toString()} ==\n${message}\n\n`;
}
