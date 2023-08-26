interface RootState {}

interface CoachesState {
  coaches: Coach[];
  lastFetchTimestamp: number | null;
}

interface Coach {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  hourlyRate: number;
  areas: string[];
}

interface RequestsState {
  requests: Request[];
}

interface Request {
  id: string;
  coachId: string;
  userEmail: string;
  message: string;
}

interface AuthenticationState {
  userId: string | null;
  token: string | null;
  didAutoLogout: boolean;
}

interface AuthenticationCredentials {
  email: string;
  password: string;
}

export {
  RootState,
  CoachesState,
  Coach,
  RequestsState,
  Request,
  AuthenticationState,
  AuthenticationCredentials
};
