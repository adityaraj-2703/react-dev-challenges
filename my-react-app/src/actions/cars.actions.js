export const SELL = "SELL";

//action creator
export const sellCar = (id) => {
    return { type: SELL, payload: id }
}

