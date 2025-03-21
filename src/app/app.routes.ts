import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: "", redirectTo: "screen/home", pathMatch: "full" },
    { path: "index.jsp", redirectTo: "screen/home" },
    {
        path: "screen/home",
        loadChildren: () =>
            import("./features/home/home.routes").then((m) => m.HOME_ROUTES),
    },
    {
        path: "screen/module1",
        loadChildren: () =>
            import("./features/module1/module1.routes").then(
                (m) => m.MODULE1_ROUTES
            ),
    },
    {
        path: "screen/dashboard",
        loadChildren: () =>
            import("./features/dashboard/dashboard.routes").then(
                (m) => m.DASHBOARD_ROUTES
            ),
    },
];
