import { Request, Response } from 'express';
import { ITokens } from 'src/common/utils/tokens';

export const getTokensFromCookies = (
  req: Request,
): {
  accessToken: string | null;
  refreshToken: string | null;
} => {
  const refreshToken: string = req.cookies['refreshToken'];
  const accessToken: string = req.cookies['accessToken'];
  return {
    accessToken,
    refreshToken,
  };
};

export const setTokensInCookies = (res: Response, tokens: ITokens) => {
  res.cookie('accessToken', tokens.accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: process.env.COOKIE_EXP as any as number
  });
  res.cookie('refreshToken', tokens.refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 60000 * 60 * 24 * 7, // 7 dias
  });
};

export const clearTokensFromCookies = (res: Response) => {
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  });

  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  });
};
