"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SharedIdentityClient from "./client";
import Loading from "./loading";
import { SharedIdentityData } from "./types";

export default function Page() {
    const params = useParams();
    const linkId = params.linkId as string;
    const [data, setData] = useState<SharedIdentityData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            if (!linkId) {
                setError("Missing link ID");
                setLoading(false);
                return;
            }

            console.log(`[Fallback] Fetching data for linkId: ${linkId}`);

            try {
                const response = await fetch(`/api/shared/${linkId}`);
                console.log(`[Fallback] Response status: ${response.status}`);

                const result = await response.json();
                console.log(`[Fallback] Response data:`, result);

                if (!response.ok) {
                    throw new Error(result.error || 'Failed to load shared identity');
                }

                setData(result);
            } catch (err) {
                console.error(`[Fallback] Error:`, err);
                setError(err instanceof Error ? err.message : 'Failed to load shared identity');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [linkId]);

    if (loading) {
        return <Loading />;
    }

    return <SharedIdentityClient initialData={data} error={error} />;
} 