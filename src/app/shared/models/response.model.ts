export interface Deal {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  date: string;
  probability_status: string;
  state: string;
  selected?: boolean;
}

export interface IResponseArray {
  focusArray: Deal[];
  potentialValueArray: Deal[];
  contactMadeArray: Deal[];
  offerSentArray: Deal[];
  gettingReadyArray: Deal[];
}
