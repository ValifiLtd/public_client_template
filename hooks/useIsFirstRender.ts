import {useRef} from "react"

export function useIsFirstRender(): { isFirstRender: boolean, renderCount: number } {
    const isFirst = useRef(true)
    const renderCount = useRef(0)

    if (isFirst.current) {
        isFirst.current = false
        renderCount.current++

        return {isFirstRender: true, renderCount: renderCount.current}
    }

    renderCount.current++;
    return {isFirstRender: isFirst.current, renderCount: renderCount.current}
}