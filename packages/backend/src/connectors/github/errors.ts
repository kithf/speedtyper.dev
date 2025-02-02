export class FailedGithubRequest extends Error {
  status: number;
  constructor(status: number) {
    super(`Request failed with status: ${status}`);
    this.status = status;
    Object.setPrototypeOf(this, FailedGithubRequest.prototype);
  }
}

export class InvalidGithubBlob extends Error {
  constructor(msg?: string) {
    super(`Invalid Github Blob: ${msg}`);
    Object.setPrototypeOf(this, InvalidGithubBlob.prototype);
  }
}

export class InvalidGithubRepository extends Error {
  constructor(msg?: string) {
    super(`Invalid Github Repository: ${msg}`);
    Object.setPrototypeOf(this, InvalidGithubRepository.prototype);
  }
}

export class InvalidGithubUser extends Error {
  constructor(msg?: string) {
    super(`Invalid Github User: ${msg}`);
    Object.setPrototypeOf(this, InvalidGithubUser.prototype);
  }
}

export class InvalidGithubToken extends Error {
  constructor(msg?: string) {
    super(`Invalid Github Token: ${msg}`);
    Object.setPrototypeOf(this, InvalidGithubToken.prototype);
  }
}

export class InvalidGithubTree extends Error {
  constructor(msg?: string) {
    super(`Invalid Github Tree: ${msg}`);
    Object.setPrototypeOf(this, InvalidGithubTree.prototype);
  }
}
