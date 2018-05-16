export class Connect {
   /* private static hostUrl = 'http://aehome.ddnsthailand.com/smart/patient';*/
    private static hostUrl = 'http://localhost/smart/patient';
    public static readonly USER_TOKEN = 'user_token';
    static getHostUrl():string {
      return this.hostUrl;
    }
  }