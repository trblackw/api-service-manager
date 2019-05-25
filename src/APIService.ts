import { KeyValue, APIMethod } from "./types";

export class APIService {
   constructor(private _authToken: string) {}
   /**
    * HEADERS
    */
   private _headers: string[][] = []

   get headers (): string[][] {
      return this._headers;
   }
   
   public resetHeaders (): void {
      this._headers = [];
   }
   
   public setHeaders(headers: KeyValue<string, string>[]): APIService {
      for (const i in headers) {
         if (headers[i]['key'] && headers[i]['value']) {
            this._headers.push([
               headers[i].key,
               headers[i].value
            ])
         }
      }
      return this;
   }

   /**
    * TOKEN
    */
   get authToken(): string {
      return this._authToken
   }

   set authToken (newAuthToken: string) {
      this._authToken = newAuthToken;
   }

   /**
    * METHOD
    */
   private _method: APIMethod = "GET";

   public setMethod (newMethod: APIMethod): APIService {
      this._method = newMethod;
      return this;
   }

   /**
    * REQUEST
    */
   public request<Req> (body?: Req): RequestInit {
      return {
         headers: this._headers,
         method: this._method,
         body: body ? JSON.stringify(body) : null
      }
   }
}


export class RequestBody<Req> {
   constructor(private _requestBody: Req) {}
   
   get requestBody(): Req {
      return this._requestBody;
   }

   set requestBody(newRequestBody: Req) {
      this._requestBody = newRequestBody
   }

 }