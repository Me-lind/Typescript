const appElement = document.getElementById('app')
import { Equal, Expect } from "@total-typescript/helpers"

type Test = Expect<Equal<typeof appElement, HTMLElement|null>>
