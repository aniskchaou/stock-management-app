import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class SaleTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _sale = []
    static id = 0

    public getAll() {
        return this._sale;
    }

    public get(id) {
        return this._sale.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = SaleTestService.id
        this._sale.push(data);
        SaleTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._sale.findIndex(item => item === old);
        this._sale[foundIndex] = data;
    };

    public remove(id) {
        this._sale.splice(id, 1);
    };


}