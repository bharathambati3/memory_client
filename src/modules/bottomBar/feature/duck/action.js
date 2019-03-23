import {setData} from "../../../../lib/redux/actions/manageData";
import {KEY_BOTTON_NAV_SELECTED} from "../../../../lib/constants/keys";
import {routeAction} from "../../../../lib/redux/actions/historyAction";
export const onBottomNavChange = (val, url) => {
    return [
        setData({
            key: KEY_BOTTON_NAV_SELECTED,
            value: val
        }),
        routeAction({
            url
        })
    ]
}