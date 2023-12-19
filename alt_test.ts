import { assertEquals, assertExists } from "https://deno.land/std@0.209.0/assert/mod.ts";
import Alt from "./alt.ts"
const alt = new Alt();

/*
function prompt( a: string, b: string ) {
  console.log(a,b);
  return ""
}
*/

Deno.test("getAccessibility exists", () => { assertExists(alt.getAccessibility); });
Deno.test("getAccounts exists", () => { assertExists(alt.getAccounts); })
Deno.test("getActivities exists", () => { assertExists(alt.getActivities); })
Deno.test("getAppName exists", () => { assertExists(alt.getAppName); })
Deno.test("getAppPath exists", () => { assertExists(alt.getAppPath); })
Deno.test("getBatteryLevel exists", () => { assertExists(alt.getBatteryLevel); })
Deno.test("getBluetoothAddress exists", () => { assertExists(alt.getBluetoothAddress); })
Deno.test("getBluetoothName exists", () => { assertExists(alt.getBluetoothName); })
Deno.test("getBtProfileState exists", () => { assertExists(alt.getBtProfileState); })
Deno.test("getBuildNum exists", () => { assertExists(alt.getBuildNum); })

Deno.test("getType test", () => {
  assertEquals(alt.getType(), "Alt");
});
