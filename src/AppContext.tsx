import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react"

export const ScheduleContext = createContext({})

interface ScheduleContextProviderProps {
    children: ReactNode
}

export function ScheduleContextProvider({
    children,
}: ScheduleContextProviderProps) {
    const [professionalName, setProfessionalName] = useState<string>()
    const [serviceName, setServiceName] = useState<string>()
    const [day, setDay] = useState<string>()
    const [hour, setHour] = useState<string>()
    const [nameContext, setNameContext] = useState<string>()
    const [phoneContext, setPhoneContext] = useState<string>()

    return (
        <ScheduleContext.Provider
            value={{
                professionalName,
                serviceName,
                day,
                hour,
                nameContext,
                phoneContext,
                setProfessionalName,
                setServiceName,
                setDay,
                setHour,
                setNameContext,
                setPhoneContext,
            }}
        >
            {children}
        </ScheduleContext.Provider>
    )
}
