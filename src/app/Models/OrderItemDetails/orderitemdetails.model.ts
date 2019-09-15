export class Orderitemdetails {

    constructor(
    private _ID :number,
    private _ProductID:number,
    private _SellerID :number,
    private _ProductName :string,
    private _OrderedQuantity :number,
    private _PerUnitPrice :number,
    private _OrderID :number
    )
    {
        this.ID=_ID;
        this.ProductID=_ProductID;
        this.SellerID=_SellerID;
        this.ProductName=_ProductName;
        this.OrderedQuantity=_OrderedQuantity;
        this.PerUnitPrice=_PerUnitPrice;
        this.OrderID=_OrderID;

    }

    public get ID(): number {
        return this._ID;
    }
    public set ID(value: number) {
        this._ID = value;
    }
    public get ProductID(): number {
        return this._ProductID;
    }
    public set ProductID(value: number) {
        this._ProductID = value;
    }
    public get SellerID(): number {
        return this._SellerID;
    }
    public set SellerID(value: number) {
        this._SellerID = value;
    }
    public get ProductName(): string {
        return this._ProductName;
    }
    public set ProductName(value: string) {
        this._ProductName = value;
    }
    public get OrderedQuantity(): number {
        return this._OrderedQuantity;
    }
    public set OrderedQuantity(value: number) {
        this._OrderedQuantity = value;
    }
    public get PerUnitPrice(): number {
        return this._PerUnitPrice;
    }
    public set PerUnitPrice(value: number) {
        this._PerUnitPrice = value;
    }
    public get OrderID(): number {
        return this._OrderID;
    }
    public set OrderID(value: number) {
        this._OrderID = value;
    }
}
