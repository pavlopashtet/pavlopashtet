import { memo, useCallback, useMemo, useState } from "react";

function useValuesHook(values){
    const [prop, setProp] = useState(values)
    const calculate = useMemo(() => values+10, [values])
    return calculate;

}
export default useValuesHook;