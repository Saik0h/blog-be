import { Request, Response } from 'express';
import { Tokens } from 'src/common/utils/tokens';

export const getTokensFromCookies = (
  req: Request,
): Tokens => {
  const refresh_token: string = req.cookies['refresh_token'];
  const access_token: string = req.cookies['access_token'];
  return {
    access_token,
    refresh_token,
  };
};

export const setTokensInCookies = (res: Response, tokens: Tokens) => {
  res.cookie('access_token', tokens.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: process.env.COOKIE_EXP as any as number
  });
  res.cookie('refresh_token', tokens.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 60000 * 60 * 24 // 7 dias
  });
};

export const clearTokensFromCookies = (res: Response) => {
  res.clearCookie('access_token', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  });

  res.clearCookie('refresh_token', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  });
};
