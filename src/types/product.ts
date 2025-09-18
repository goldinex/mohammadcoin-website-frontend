export type Category = 'seke' | 'parsian' | 'shemsh';

export interface Product {
  product_id: number;
  name_en: string;
  name_fa: string;
  category: Category;
  is_special_price: boolean;
  is_active: boolean;
  latest_buy_price: number;
  latest_sell_price: number;
  shamsi_updated_at: string | null;
}



export type PricePoint = {
  buy_price: number;
  sell_price: number;
  shamsi_date: string;
};