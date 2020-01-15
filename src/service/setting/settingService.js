import request from "../../share/axios";

class settingService {
    static singleinstance() {
        if (!settingService.instance) {
            settingService.instance = new settingService();
        }
        return settingService.instance
    }


}

export default settingService.singleinstance();