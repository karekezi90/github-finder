import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext"
import ReposItem from "./ReposItem";

function ReposList() {

    const { repos } = useContext(GithubContext)

    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest Repositories
            </h2>
            { repos.map((repo) => (
                <ReposItem key={ repo.id } repo={ repo } />
            ) ) }
        </div>
    )
}

export default ReposList
