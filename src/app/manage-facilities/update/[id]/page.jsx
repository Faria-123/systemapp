import { getdatabyId } from "@/app/lib/data";
import UpdateFacilityForm from "@/components/UpdateFacilityForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
// import UpdateFacilityForm from "./UpdateFacilityForm";

const UpdateFacilityPage = async ({ params }) => {

    const { id } = await params;
    //    const {token}=await 
    const tokenData = await auth.api.getToken({
        headers: await headers(),
    });

    const token = tokenData?.token;
    const facility = await getdatabyId(id, token);

    return (
        <div className="max-w-4xl mx-auto p-6">

            <h1 className="text-3xl font-bold text-white mb-8">
                Update Facility
            </h1>

            <UpdateFacilityForm facility={facility} />

        </div>
    );
};

export default UpdateFacilityPage;