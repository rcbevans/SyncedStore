import * as Y from "yjs";

export type Primitive = bigint | boolean | null | number | string | symbol | undefined;

export type JSONValue = Primitive | JSONObject | JSONArray;

export type JSONObject = {
  [key: string]: JSONValue;
};

export type JSONArray = Array<JSONValue>;

export function isYType(element: any) {
  return element instanceof Y.AbstractType;
}

let a = {
  b: {
    nexted: 5;
  }
}

let b = a as Partial<typeof a>;
b.b?.nexted