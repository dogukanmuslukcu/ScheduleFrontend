export interface DecodedToken{
  Token: string | null;
  DecodedToken:string | null;
  Expiration: number;
  Name: string;
  Role: string;
  Roles: string[];
  Email: string;
  UserId: number;
}
