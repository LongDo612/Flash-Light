function FlashLamp() {
    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };

    this.turnOn = function () {
        this.status = true;
    }

    this.turnOff = function () {
        this.status =  false;
    }

    this.light = function () {
        if(this.status){
            alert("Lighting");
            this.battery.decreaseEnergy();
        }
        else
            alert("Turned off!");
    };
}