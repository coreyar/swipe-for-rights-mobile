// @flow
import type { NavigationScreenProp, NavigationState } from "react-navigation";

type GeneratorType = Generator<void | Promise<any>, void, any>

type Navigation = NavigationScreenProp<NavigationState>

type StandardAction = {| type: string, payload: * |}