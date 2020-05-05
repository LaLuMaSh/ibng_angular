export class Helper {
  public static loadToken(): string {
    const item = localStorage.getItem('user');
    if (item == null) {
      return null;
    } else {
      return JSON.parse(item).token;
    }
  }
}
