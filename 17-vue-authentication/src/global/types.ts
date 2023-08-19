interface RootState {}

interface CoachesState {
  coaches: Array<Coach> | [];
  lastFetchTimestamp: number | null;
}

interface Coach {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  hourlyRate: number;
  areas: Array<string>;
}

interface RequestsState {
  requests: Array<Request> | [];
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
  tokenExpiration: string | null;
}

export {
  RootState,
  CoachesState,
  Coach,
  RequestsState,
  Request,
  AuthenticationState
};
