export default function Topbar() {
    return (
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
            <div className="row gx-0 align-items-center">
                <div className="col-lg-5 text-center text-lg-start mb-lg-0">
                    <div className="d-flex align-items-center">
                        <a href="#" className="text-muted me-4 d-flex align-items-center">
                            <i className="fas fa-envelope text-secondary me-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                </svg>
                            </i>
                            Example@gmail.com
                        </a>
                        <a href="#" className="text-muted d-flex align-items-center">
                            <i className="fas fa-phone-alt text-secondary me-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                                </svg>
                            </i>
                            +447438914638
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 text-center mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-twitter fw-normal text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 512 462.799"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                                </svg>
                            </i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-facebook-f fw-normal text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.68c0 .733.593 1.32 1.325 1.32H12.82V14.725h-3.1v-3.638h3.1V8.414c0-3.067 1.875-4.748 4.616-4.748 1.312 0 2.444.097 2.77.141v3.22l-1.902.001c-1.492 0-1.777.71-1.777 1.745v2.29h3.555l-.463 3.638h-3.092V24h6.066c.733 0 1.325-.588 1.325-1.32V1.326C24 .594 23.408 0 22.675 0z" />
                                </svg>
                            </i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-linkedin-in fw-normal text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path d="M22.23 0H1.77C.79 0 0 .78 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zM5.34 7.47c-1.14 0-2.06-.92-2.06-2.05 0-1.13.92-2.05 2.06-2.05 1.13 0 2.05.92 2.05 2.05-.01 1.13-.92 2.05-2.05 2.05zm15.1 12.98h-3.56v-5.53c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.13 1.43-2.13 2.91v5.64H9.38V9.03h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.56v6.15z" />
                                </svg>
                            </i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="">
                            <i className="fab fa-instagram fw-normal text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path d="M7.75 2h8.5a5.75 5.75 0 015.75 5.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM16.5 6a1 1 0 112 0 1 1 0 01-2 0z" />
                                </svg>
                            </i>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle" href="">
                            <i className="fab fa-youtube fw-normal text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path d="M23.498 6.186a3.008 3.008 0 00-2.123-2.123C19.935 3.5 12 3.5 12 3.5s-7.935 0-9.375.563A3.008 3.008 0 00.502 6.186C0 7.626 0 12 0 12s0 4.374.502 5.814a3.008 3.008 0 002.123 2.123C4.065 20.5 12 20.5 12 20.5s7.935 0 9.375-.563a3.008 3.008 0 002.123-2.123C24 16.374 24 12 24 12s0-4.374-.502-5.814zM9.75 15.75v-7.5l6.375 3.75-6.375 3.75z" />
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                        <a href="#" className="text-muted me-2">Help</a>
                        <small> / </small>
                        <a href="#" className="text-muted mx-2">Support</a>
                        <small> / </small>
                        <a href="#" className="text-muted ms-2">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
